import cover from '../../assets/cover.png'

export const SEOImage = () =>{ 
    <>
        <meta property="og:image" content={"https://thomashingray.github.io/devPortfolio/" + {cover}} />
        <meta name="twitter:image" content={"https://thomashingray.github.io/devPortfolio/" + {cover}} />
    </>
}

export default SEOImage