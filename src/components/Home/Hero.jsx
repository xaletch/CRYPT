import React from 'react'
import { Header } from '../Header/Header'
import { Airdrop } from './Airdrop'

export const Hero = () => {
  return (
    <div className='home-hero'>
        <img className='hero_left-img' src='https://blast.io/images/frame-corner-sm-top-left.svg' alt='' />
        <img className='hero_right-img' src='https://blast.io/images/frame-corner-sm-top-right.svg' alt='' />
        <img className='hero_left-bottom-img' src='https://blast.io/images/frame-corner-sm-bottom-left.svg' alt='' />
        <img className='hero_right-bottom-img' src='https://blast.io/images/frame-corner-sm-bottom-right.svg' alt='' />
        <div className='home-hero_info'>
            <div className='home-hero_info-inner'>
                <div className='text-info count'>TVL / $657,561,860</div>
                <div className='text-info total-users'>TOTAL USERS / 68,359</div>
                <div className='text-info live'>EARLY ACCESS LIVE</div>
            </div>
        </div>
        <div className='home-hero_inner'>
            <div className='home-hero_content'>
                <div className='home-hero_left'>
                    <Header />
                    <div className='home-hero_main'>
                        <div className='home-hero_block'>
                            <div className='home-hero_text'>
                                <h1>The L2 that helps you earn more
                                    <span className='currencies'>
                                        <span>USD</span>
                                    </span>
                                </h1>
                                <h3>The only Ethereum L2 with native yield for ETH and stablecoins. Airdrop now live.</h3>
                                <a href='#' className='link_button'>
                                    <div className='button'>
                                        <button>JOIN EARLY ACCESS</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='hero_code'>
                            <div className='hero_code-inner'>
                                <h4>BACKED BY</h4>
                                <div className='home-hero_code-logo'>
                                    <img className='logo-1' src='https://blast.io/_next/image?url=%2Fimages%2Fletterhead-paradigm-camo-100.png&w=256&q=75' alt='logo'/>
                                    <img className='logo-2' src="https://blast.io/_next/image?url=%2Fimages%2Fletterhead-standard-crypto-long-camo-100.png&w=256&q=75" alt='logo'/>
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
                        </div>
                    </div>
                </div>
                <div className='home-hero_line'>
                    <div className='plus'>
                        <div className='line-1'></div>
                        <div className='line-2'></div>
                    </div>
                    <div className='line'></div>
                    <div className='plus'>
                        <div className='line-1'></div>
                        <div className='line-2'></div>
                    </div>
                </div>
                <div className='home-hero_code'>
                    <Airdrop />
                </div>
            </div>
        </div>
    </div>
  )
}
