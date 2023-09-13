"use strict";
const axios = require("axios");
const { DateTime } = require('luxon'); 
/**
 * A set of functions called "actions" for `payment-status-update`
 */

module.exports = {
  paymentStatusUpdate: async (ctx, next) => {
    try {
      const object_url = ctx.request.body.object_url;
        const response = await axios({
        method: "post",
        url: object_url,
       
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 1eb53db743cfa43b902e4b8d83bc6c55",
        },
      });

      const currentdate = DateTime.utc().toFormat("yyyy-MM-dd HH:mm:ss");

      console.log(response.data);
      const entries = await strapi.db.connection.raw(
        `UPDATE public.transactions
            SET status='${response.data.status}', updated_at='${currentdate}'
            WHERE tid ='${response.data.uid}';`
      );
      ctx.body = response.data;

      /*const orderupdate = await strapi.db.connection.raw(
        `UPDATE public.transactions
            SET status='${response.data.status}'
            WHERE tid ='${response.data.uid}';`
      );
      ctx.body = response.data;*/

      const cleardata = await strapi.db.connection.raw(
        `DELETE FROM public.carts
        USING public.transactions
        WHERE public.carts.customer_id = public.transactions.customer_id 
        AND public.transactions.tid='${response.data.uid}';`
      );
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },
};
