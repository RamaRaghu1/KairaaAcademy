import React from 'react';
import {Link} from 'react-router-dom';
import imagebanner from '../assets/bootcamp.jpg'

function BootCamp() {
  return (
    <>
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-3 '>
                <div className='bg-[#CADDFE] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-black font-bold mb-5 '>Bootcamp</h2>

                        </div> 

                       
                    </div>
                </div></div>
                {/* *************************************************** */}
                <div className='container mx-auto flex md:flex-row flex-col '>
                    <div className='md:w-1/2'>
                    <h2 className='text-2xl font-bold py-3'>ABOUT THE PROGRAM</h2>
                    <p className='py-2 text-lg leading-7 text-medium'>Blockchain Developer Bootcamp aims to provide an experience in Blockchain development to blockchain beginners. 
                        The sessions will give a walkthrough of popular tools necessary for 
                        dApp development and a step-by-step guide to implementing  decentralized application.</p>
                        <h2 className='text-2xl font-bold py-3'>WHAT YOU WILL LEARN?</h2>
                    <ul className='py-2 text-lg leading-7 text-medium  list-disc'>
                        <li>Blockchain Fundamentals </li>
                        <li>Cryptocurrency Expert</li>
                        <li>Navigating Cryptocurrencies And Blockchain for global Impact</li>
                        <li>Bitcoin Cryptocurrency</li>
                        <li>Cryptocurrency Beginner Guide</li>
                    </ul>
                </div>
                <div className='md:w-1/2 p-4'>
                        <img src={imagebanner} alt=""/>
                </div>
                </div>
               
                {/* ************************************************************************************** */}
                <div className='container mx-auto'>
                    <h2 className='text-2xl font-bold py-3'>WHAT YOU WILL EARN?</h2>
                    <ul className='py-2 text-lg leading-7 text-medium  list-disc'>
                        <li>A Blockchain-powered Certificate. </li>
                        <li>After Completing the Program You will get a well knowledge about Blockchain and Real world Contribution of Blockchain. </li>
                        </ul>
                </div>
                {/* ********************************** **********************************************************/}
                <div className='container mx-auto'>
                    <h2 className='text-2xl font-bold py-3'>Program Details</h2>
                    <table className="min-w-full divide-y divide-gray-200 border-2 border-gray-200">
                        <thead className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Sessions</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Covered Topics</th>
                        </thead>
                        <tbody className="bg-white divide-y text-lg p-2  divide-gray-200">
                            
                            <tr><td>Introduction to Blockchain</td>
                            <td>1 hour</td>
                            <td><tr>What is Blockchain?</tr>
                            <tr> History and Evolution of Blockchain.</tr>
                            <tr>Key Features and Benifits.</tr>
                           </td>
                            
                            </tr>

                            <tr><td>How Blockchain Works.</td>
                            <td>1.5 hour</td>
                            <td><tr>What is Blockchain?</tr>
                            <tr>Structure of Blockchain.</tr>
                            <tr>Cryptography in Blockchain.</tr>
                            <tr>Consensus Mechanism.</tr>
                            <tr>Transaction Verification and Validation.</tr>
                           </td></tr>


                           <tr><td>Blockchain Use Cases</td>
                            <td>1.5 hour</td>
                            <td><tr>Cryptocurrencies(Bitcoin, Ethereum)</tr>
                            <tr>Supply Chain Management.</tr>
                            <tr>Healthcare and Identity Verification.</tr>
                            <tr>Smart Contracts and Decentralized Applications.</tr>
                           
                           </td></tr>


                           <tr><td>Blockchain Ecosystem.</td>
                            <td>1 hour</td>
                            <td><tr>Public vs Private Blockchain.</tr>
                            <tr>Ethereum and Smart Contracts.</tr>
                            <tr>Other Major Blockchain Platforms</tr>
                            <tr>Walleta and Exchanges.</tr>
                           
                           </td></tr>


                           <tr><td>Challenges and Future Trends.</td>
                            <td>0.5 hour</td>
                            <td><tr>Scalability and Energy Consumption.</tr>
                            <tr>Regulatory and Legal Considerations.</tr>
                            <tr>Emerging Trends Legal Considerations.</tr>
                            <tr>The Future of Blockchain.</tr>
                           
                           </td></tr>

                           
                           <tr ><td>Conclusion and Q&A.</td>
                            <td>0.5 hour</td>
                            <td><tr>Recap of Key Concepts.</tr>
                            <tr>Regulatory and Legal Considerations.</tr>
                            <tr>Open Discussion and Participant Questions.</tr>
                            <tr>Final Certification Delivery.</tr>
                           
                           </td></tr>



                            

                        </tbody>
                    </table>
                    
                </div>
                <div className='text-center py-3 mt-5 '>
                <Link to='/courseregistration'><button className='bg-blue-500 rounded hover:bg-blue-700 p-3 text-lg text-center'>Register Now</button></Link>
                </div>
                {/* <div className='mx-auto   bg-blue-50  border-l-2 border-r-2 border-r-black border-l-black md:pl-20 md:pr-10 p-5 rounded'>
                    <h2 className='text-2xl font-bold py-2'>If you have any Queries.</h2>
                   <div className='flex justify-between text-lg font-medium '>
                    <p>Email: Support@kairaaacademy.com</p>
                    <p>Call: +91-7092774077</p>
                </div>
                </div> */}
                </> 
  )
}

export default BootCamp;