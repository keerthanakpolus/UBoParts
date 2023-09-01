import React, { useCallback, useEffect, useState } from 'react';
import AppLink from '~/components/shared/AppLink';
import AppImage from '~/components/shared/AppImage';
import Header_home from '~/components/header_/Header_home';
function Create_new_listing() {
    return (
    
        <> 
            <div className="page_header"> 
                <Header_home />
            </div>
            <div className="main-body pb-2 mb-5">
                <div className="container">
                    <section className="quote-wrapper mt-5">
                        <div className="row mt-3 g-4">
                            <div className="col-12 col-md-3">
                                <div className="quote-inner-wrapper coulmn-bg-color-1 rounded  md-5 pb-5 pt-0 px-3 ps-4 pe-4">
                                    <div className="table-responsive">
                                        <table className="table quote-table seller-table">
                                            <tbody>
                                                <tr>
                                                    <th className=" pt-0 p-2 pb-1 ps-0 custom-color-2 regularfont body-sub-titles border-bottom border-top-0 ">Shop Manager</th>
                                                </tr>
                                            
                                                <tr>
                                                    <td className='pb-2 pt-4'>
                                                        <a href="" className=" custom-color-2 regularfont products-name">Dashboard</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="active pb-2 pt-2">
                                                        <div>
                                                            <a href="" className="custom-color-2 regularfont products-name">Listings</a>
                                                            <span className="arrow-right"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='pb-2 pt-2'> 
                                                        <a href="" className="custom-color-2 regularfont products-name">Messages</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='pb-2 pt-2'>
                                                        <a href="" className="custom-color-2 regularfont products-name">Orders</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='pb-2 pt-2'>
                                                        <a href="" className="custom-color-2 regularfont products-name">Edit shop</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='pb-2 pt-2'>
                                                        <a href="" className="custom-color-2 regularfont products-name">Password</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='pb-1 pt-2'>
                                                        <a href="" className="custom-color-2 regularfont products-name">Logout</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="coulmn-bg-color-1 rounded">
                                    <div className="table-responsive pt-3 pb-3 overflow-hidden">
                                        <table className="table profile-table-1 coulmn-bg-color-1 rounded">
                                            <tbody className="double">
                                                <tr>
                                                    <th colSpan={2} className="px-5 pb-1 ps-0 custom-color-3  regularfont body-sub-titles border-bottom border-top-0">Create New Listing</th>
                                                </tr>
                                            
                                                <tr className="double">
                                                    <td className='px-5 pt-4 pb-4'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">List Name <span className="required">*</span></label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" name="first-name" placeholder="24 Inch Tyre for Mustang"/>
                                                    </td>
                                                    <td className='px-5 pt-4 pb-4'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Plate Number <span className="required">*</span></label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" name="last-name" placeholder="Enter Plate Number to Auto Fill form"/>
                                                    </td>
                                                </tr>
                                                <tr className="double">
                                                    <td className='px-5 pt-4 pb-2'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Make</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option className='regularfont mini-text-1'>Choose Make</option>
                                                        </select>
                                                    </td>
                                                    <td className='px-5 pt-4 pb-2'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Model</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option>Choose Model</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr className="double">
                                                    <td className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Year</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option>Choose Year</option>
                                                        </select>
                                                    </td>
                                                    <td className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Company</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option>Choose Category</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr className="single">
                                                    <td colSpan={2} className='px-5 pb-4 border-top-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Sub Category</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option>Choose Sub Category</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr className="double">
                                                    <td className='px-5 pb-2 pt-4'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Price (€)</label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" placeholder="Listing Price (€)"/>
                                                    </td>
                                                    <td className='px-5 pb-2 pt-4'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Quantity</label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" placeholder="Listing Quantity"/>
                                                    </td>
                                                </tr>
                                                <tr className="double">
                                                    <td className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">On Sale</label><br/>
                                                        <select className="form-select input-bg-color-2 border-0 products-name custom-color-2">
                                                            <option>Select</option>
                                                        </select>
                                                    </td>
                                                    <td className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Location of Part</label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" placeholder="Location of Part"/>
                                                    </td>
                                                </tr>
                                                <tr className="single">
                                                    <td colSpan={2} className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Article No</label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" placeholder="Article No"/>
                                                    </td>
                                                </tr>
                                                <tr className="single">
                                                    <td colSpan={2}  className='px-5 pb-4 pt-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Part No/Barcode No</label>
                                                        <input type="text" className="form-control input-bg-color-2 border-0 products-name custom-color-2" placeholder="Listing Part No/Barcode No"/>
                                                    </td>
                                                </tr>
                                                <tr className="double">
                                                    <td className='px-5 pt-4 pb-2' >
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Featured Image</label>
                                                        <input className="form-control pt-2 pb-1 choosefile" type="file" id="formFile"/>
                                                    </td>
                                                    <td className='px-5 pt-4 pb-2'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Image(s)</label>
                                                        <input className="form-control pt-2 pb-1 choosefile" type="file" id="formFile"/>
                                                    </td >
                                                </tr>
                                                <tr className="single">
                                                    <td colSpan={2} className='px-5 pb-2 border-0'>
                                                        <label className="custom-color-2 regularfont products-name pb-2">Listing Description</label>
                                                        <textarea className="form-control input-bg-color-2 border-0 products-name rounded" rows={4}></textarea>
                                                    </td>
                                                </tr>
                                                <tr className="single">
                                                    <td colSpan={2} className="border-0 px-5">
                                                        <button type="submit" className="place-quote text-white mediumfont products-name rounded border-0 button-bg-color-1">Create Listing</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
export default Create_new_listing;