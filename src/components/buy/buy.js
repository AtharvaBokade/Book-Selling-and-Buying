import React from 'react'
import '../../App.css'
import { useState , useEffect } from 'react'
import Axios from 'axios'
import BookDetailsModal from './bookDetailsModal'
function Buy() {

    const [bookList, setbookList] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:5000/bookList').then((res)=>{
            setbookList(res.data);
            console.log(res.data);
            
          }
          )
    
      
    }, [])
  return (
    <div className='buyMainContainer'>
      <div className=' bg-slate-800 col-12 row-1 flex  items-center px-2' >
        <div className='col-1  p-1'>
            <div className='col-12 text-white'>Home</div>
        </div>
        <div className='col-1  p-1'>
            <div className='col-12 text-white'>About</div>
        </div>
        <div className='col-1  p-1'>
            <div className='col-12 text-white'>Contacts</div>
        </div>
        <div className='col-8  p-1'>
            <div className='col-12 text-white'></div>
        </div>
        <div className='col-1  p-1'>
            <div className='col-12 text-white'>Login</div>
        </div>
           
      </div>



      <div className='col-12   '>
        <div className='bg-white'></div>
      </div>
      <div className='contentContainer p-3 flex row-11'>
            <div className='col-1'>
                <div className='row-12'></div>
            </div>
            <div className='col-10  flex'>
               
                    <div className='row-12 col-3  p-2'>
                        <div className='col-12 rounded shadow row-6'>
                            <div className='col-12  row-8'></div>
                            <div className='col-12 row-4 flex'>
                                <div className='col-6  flex justify-center items-center row-12  p-2 '>
                                <div className=' '><div>Books Sold</div> <div className='col-12 flex justify-center'>10</div></div>
                                    
                                </div>
                                <div className='col-6  flex justify-center items-center row-12 '>
                                <div className=' '><div>Site Visitor</div> <div className='col-12 flex justify-center'>100</div></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 shadow rounded my-2 row-6'>
                            <div className='p-2 col-12 row-2  '>
                                <div className='font-semibold text-xl'>Heading of the Conatiner</div>
                                
                            </div>
                            <div className='p-2 col-12 row-110 overflow-y-hidden'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among </div>
                        </div>
                    </div>
                    <div className='row-12 col-6  p-2'>
                        <div className='col-12 row-3 rounded shadow'>
                            <div className='col-12 flex rounded first-letter:  row-4 py-3 bg-slate-300'>
                                <div className='col-4 justify-center flex items-center'>
                                   Share a Thought
                                </div>
                                <div className='col-4 justify-center flex items-center'>
                                    Suggest Changes 
                                </div>
                                <div className='col-4 justify-center flex items-center'>
                                   Give reviews
                                </div>
                                
                            </div>
                            {true&&<div className='col-12 row-8  py-2 px-3'>
                                <div>Share Your thoughts</div>
                                <div className=''> <textarea className=' col-12 r ' rows={2}/></div>
                                <div className='col-12 flex'>
                                    <div className='col-10'></div>
                                    <div className='col-2'><button className=''>Submit</button></div>
                                </div>
                                </div>}
                                {false&&<div className='col-12 row-8 bg-zinc-600 py-2 px-3'>
                                <div>Suggest Changes</div>
                                <div className=''> <textarea className='bg-zinc-400 col-12 r ' rows={2}/></div>
                                <div className='col-12 flex'>
                                    <div className='col-10'></div>
                                    <div className='col-2'><button className=''>Submit</button></div>
                                </div>
                                </div>}
                        </div>
                        <div className='col-12 row-5 my-2 inner-border overflow-y-auto shadow rounded p-3'>
                            {bookList.map((val,key)=>{
                                return(
                                    <>
                                    <div className='col-12 row-12 my-2 rounded shadow p-3 flex'>
                                    <div className='col-4 bg-slate-500 row-6'></div>
                                    <div className='col-8 mx-3 row-12 '>
                                        <div>Name</div>
                                        <div>Publisher</div>
                                        <div>Name</div>
                                    </div>
                                    </div>
                                         
                                    </>                                     
                                );
                            })}
                        </div>
                        <div className=' horizontalScroll1 p-3 col-12 row-4 my-2 rounded shadow '>
                            <div className='horizontalScroll post-list  flex col-12 row-12 '>
                               
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>

                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>

                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                <div className='col-3 bg-slate-300 row-12 mx-2'></div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row-12 col-3  p-2'>
                        <div className='col-12 rounded shadow row-9 p-3'>
                            <div className='col-12 row-1 flex justify-start'>Filters</div>
                            <div className='col-12 '>Subject</div>
                         <div className='mx-3 my-2'>
                          <div className="form-check ">
                             <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                             />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            JEE
                           </label>
                             </div>
                              <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                NEET
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                Math
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                Physics
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                Chemistry
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                Biology
                                </label>
                               </div>
                                  </div>
                                  <div className='col-12 '>Famous Authors</div>
                         <div className='mx-3 my-2'>
                          <div className="form-check ">
                             <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                             />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            RD Sharma
                           </label>
                             </div>
                              <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                Narendra Avasthi
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                 JD Lee
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                 R.K. Gupta
                                </label>
                               </div>
                               <div className="form-check">
                                 <input
                             className="form-check-input"
                              type="checkbox"
                                  defaultValue=""
                               id="flexCheckChecked"
                               defaultChecked=""
                                  />
                                 <label className="form-check-label" htmlFor="flexCheckChecked">
                                 O.P. Tandon
                                </label>
                               </div>
                                  </div>

                        </div>
                    </div>
                
            </div>
            <div className='col-1 '>
                <div className='row-12'></div>
            </div>
      </div>
    </div>
  )
}

export default Buy