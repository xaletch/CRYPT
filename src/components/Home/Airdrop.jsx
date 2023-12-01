import React from 'react'

export const Airdrop = () => {
    return (
        <>
            <div className='home-hero_code-top'>
                <h2>EARLY ACCESS AIRDROP</h2>
                <from className="form">
                    <span>Enter your invite code to claim your airdrop</span>
                    <div className='form-block'>
                        <div className='form-code'>
                            <input type='text'/>
                            <div className='form-code_line'></div>
                        </div>
                        <div className='form-code'>
                            <input type='text'/>
                            <div className='form-code_line'></div>
                        </div>
                        <div className='form-code'>
                            <input type='text'/>
                            <div className='form-code_line'></div>
                        </div>
                        <div className='form-code'>
                            <input type='text'/>
                            <div className='form-code_line'></div>
                        </div>
                        <div className='form-code'>
                            <input type='text'/>
                            <div className='form-code_line'></div>
                        </div>
                    </div>
                    <div className='button'>
                        <button type='submit'>ENTER INVITE CODE</button>
                    </div>
                </from>
            </div>
            <div className='home-hero_code-bottom'>
                <div className='home-hero_code-inner'>
                    <h4>BACKED BY</h4>
                    <div className='home-hero_code-logo'>
                        <img className='logo-1' src='https://blast.io/_next/image?url=%2Fimages%2Fletterhead-paradigm-camo-100.png&w=256&q=75' alt='logo'/>
                        <img className='logo-2' src="https://blast.io/_next/image?url=%2Fimages%2Fletterhead-standard-crypto-long-camo-100.png&w=256&q=75" alt='logo'/>
                    </div>
                </div>
                <div className='home-hero_code-users'>
                    <div className='user'>
                        <img className='user-img' src='https://blast.io/_next/image?url=%2Fimages%2Favatar-cl.png&w=96&q=75' alt='user'/>
                        <p className='username'>CL</p>
                    </div>
                    <div className='user'>
                        <img className='user-img' src='https://blast.io/_next/image?url=%2Fimages%2Favatar-degenspartan.png&w=96&q=75' alt='user'/>
                        <p className='username'>DegenSpartan</p>
                    </div>
                    <div className='user'>
                        <img className='user-img' src='https://blast.io/_next/image?url=%2Fimages%2Favatar-andrew-kang.png&w=96&q=75' alt='user'/>
                        <p className='username'>Andrew Kang</p>
                    </div>
                    <div className='user'>
                        <img className='user-img' src='https://blast.io/_next/image?url=%2Fimages%2Favatar-santiago.png&w=96&q=75' alt='user'/>
                        <p className='username'>Santiago</p>
                    </div>
                </div>
            </div>
        </>
    )
}
