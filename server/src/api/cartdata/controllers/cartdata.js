'use strict';
const { DateTime } = require('luxon');  
/**
 * A set of functions called "actions" for `cartdata`
 */

module.exports = {
  addcartdata: async (ctx, next) => {
     try {
        console.log(ctx.request.body);
        let entries;
        const totalprice=  `${ctx.request.body.quantity}*${ctx.request.body.productprice}`;
        const currentdate = DateTime.utc().toFormat("yyyy-MM-dd HH:mm:ss");

        const selectentries = await strapi.db.connection.raw(
        `SELECT quantity FROM public.carts
        WHERE customer_id=${ctx.request.body.customerid} AND product_id =${ctx.request.body.productid};`
        );

        if(selectentries.rows.length && selectentries.rows[0].quantity){
          
            const exist_quantity = parseInt(`${selectentries.rows[0].quantity}`);
            const additional_quantity = parseInt(`${ctx.request.body.quantity}`);
            const update_quantity = exist_quantity+additional_quantity;
            const update_total_price = update_quantity*ctx.request.body.productprice;	
            entries = await strapi.db.connection.raw(
              `UPDATE public.carts
              SET quantity ='${update_quantity}', total_price= ${update_total_price}, updated_at='${currentdate}'
              WHERE customer_id=${ctx.request.body.customerid} AND product_id = ${ctx.request.body.productid};`
            );

        }else{
            entries = await strapi.db.connection.raw(
              `INSERT INTO public.carts(id, customer_id, product_id, quantity, total_price, created_at, updated_at, published_at ) VALUES (DEFAULT, ${ctx.request.body.customerid}, ${ctx.request.body.productid}, ${ctx.request.body.quantity}, ${totalprice}, '${currentdate}', '${currentdate}', '${currentdate}' );`
            );
        }
        
        ctx.body = entries;

      } catch (err) {
        console.log(err)
        ctx.body = err;
      }
   }
};