import React, { useEffect } from 'react'
import  '../../App.css'
function Home() {
    
    
  return (
    <div className='mainContainer   '>
        
        <div className='navBarContainer  row-2 col-12 flex'>
            <div className='logoContainer  row-12 col-4 p-4 px-5'>
                <div className='col-12 row-12  flex'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path fill="#e1e0df" d="M82.9,14.9c-1.2,0.2-2.3,0.7-3.3,1.3C80.6,15.6,81.8,15.1,82.9,14.9z"/><path fill="#fff" d="M17.1,113.1l36-8c1.7-0.4,3.3-1.3,4.5-2.5l52.9-52.9c3.6-3.6,3.6-9.4,0-13L91.1,17.4 c-3.6-3.6-9.4-3.6-13,0L25.2,70.3c-1.2,1.2-2.1,2.8-2.5,4.5l-7.8,36.1C14.4,112.2,15.8,113.6,17.1,113.1"/><path fill="#fff" d="M104.1,56.3l6.5-6.5c3.6-3.6,3.6-9.4,0-13L91.2,17.3c-3.6-3.6-9.4-3.6-13,0l-6.5,6.5L104.1,56.3"/><path fill="#f8b0b4" d="M41.6 86.4L25.4 70.2 71.7 23.9 104.1 56.3 57.8 102.6 41.6 86.4"/><path fill="#f37c7e" d="M41.6 86.4L87.9 40.1 104.1 56.3 57.8 102.6 41.6 86.4"/><path fill="#e7e7e7" d="M51.3 96.2L51.3 96.2c-1.3 1.3-2.8 2.3-4.7 2.6l-26.2 8.8-5.5 3.2v.2c-.4 1.1.5 2.3 1.6 2.3 0 0 0 0 .1 0 .2 0 .3 0 .5-.1l0 0 36-8c1.7-.4 3.3-1.3 4.5-2.5l.1-.1L51.3 96.2M97.7 49.8L97.7 49.8l6.3 6.4 0 0L97.7 49.8M104.1 30.4c3.6 3.6 3.6 9.4 0 13l-6.4 6.4 6.3 6.4.1.1 6.5-6.5c1.8-1.8 2.7-4.1 2.7-6.4 0-2.3-.9-4.7-2.7-6.5L104.1 30.4"/><path fill="#dc7173" d="M97.6 49.8L51.3 96.2 57.8 102.6 104.1 56.3 104 56.2 97.6 49.8"/><path fill="#a8b2c6" d="M14.9,110.9l2.8-15.4l15,15l-15.6,2.7C15.8,113.6,14.4,112.2,14.9,110.9z"/><path fill="#e1e0df" d="M111.8,48.4c0.7-1,1.1-2.1,1.4-3.3C112.9,46.2,112.5,47.4,111.8,48.4z"/><path fill="none" d="M71.7 23.9L104.1 56.3"/><path fill="#464c55" d="M13.2,114.8c-1.3-1.3-1.7-3.1-1.2-4.7l7.9-35.9c0.6-2.3,1.6-4.3,3.3-5.9l52.8-53 c4.7-4.7,12.4-4.8,17.2-0.1l19.4,19.4c4.7,4.7,4.7,12.5,0,17.3l-52.9,52.9c-1.6,1.6-3.7,2.8-5.9,3.3L17.9,116 C16.3,116.5,14.5,116.1,13.2,114.8z M89,19.5c-2.4-2.4-6.4-2.4-8.8,0L27.3,72.4c-0.8,0.8-1.4,1.8-1.6,3l-7.6,34.4l34.4-7.6 c1.1-0.3,2.2-0.8,3-1.6l52.9-52.9c2.4-2.4,2.4-6.4,0-8.8L89,19.5z"/></svg>
                <div className=' text-5xl font-semibold text-purple-700'>
                    S B
                </div>
                </div>
            </div> 
            <div className='  row-12 col-8 flex '>
               <div className='col-1 row-12 '>

               </div>
               <div className='col-11 row-12  py-4'>
                    <div className='col-12 flex  navContainer shadow-sm  items-center row-12 bg-slate-200 rounded-bl-3xl rounded-tl-3xl'>
                            <div className='col-3 '></div>
                            <div className='col-2 text-white'>Home</div>
                            <div className='col-2 text-white'>About</div>
                            <div className='col-2 text-white'>Contacts</div>
                            <div className='col-2 text-white'>Search
                                
                            </div>
                            <div className='col-1 text-white'>Contacts</div>
                           
                    </div>
               </div>
            </div>
        </div>
        <div className='bodyContainer  col-12 row-8 flex'>
                <div className='body1  col-6 row-12 px-5 py-16'>
                        <div className=' row-12 col-12'>
                            <div className='col-12 row-4 '>
                                <p>
                                 <h1 className='text-7xl text-blue-700 font-mono font-semibold'>
                                    Sell And Buy
                                 </h1>
                                 <h1 className='text-5 text-blue-500 font-mono font-semibold'>
                                    From Your Home
                                 </h1>
                                </p>

                            </div>
                            <div className='col-12 row-4 '>
                                <p className='font-sans'>
                                Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance 
                                </p>
                            </div>
                            <div className='col-12 row-4  py-3'>
                                <div className=' col-12 row-4 flex'>
                                    <button className='col-3 rounded-lg bg-purple-500 shadow'>Sell</button>
                                    
                                    <button className=' mx-2 col-3 rounded-lg bg-purple-500 shadow'>Buy</button>
                                </div>
                                <div className=' col-12 row-3 '></div>
                                <div className=' col-12 row-3 '></div>
                                <div className='col-12 row-3 '></div>
                                
                            </div>
                        </div>
                </div>
                <div className='body2  col-6 row-12 py-10 px-36'>
                        <div className=' col-12 row-12'></div>
                </div>
        </div>
        <div className='footerContainer  col-12 row-2 py-4 flex items-center'>
            <div className=' col-12 row-5 flex  px-10'>
               
                <a href="#" class="fa fa-facebook"></a>
                 <a href="#" class="fa fa-twitter"></a>
                 <a href="#" class="fa fa-instagram"></a>
                 <a href="#" class="fa fa-whatsapp"></a>
            </div>
        </div>
    </div>
  )
}

export default Home 