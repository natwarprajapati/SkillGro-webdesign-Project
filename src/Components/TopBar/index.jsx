import './topbar.css'
export const TopBar=()=>{
    return(
        <div className='preview__header'>
        <div className="preview__envato-logo">
            <a className='header-envato_market' href="https://themeforest.net/item/skillgro-online-courses-education-react-js-template/55111370">
            <img src="/src/assets/img/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="" />
            </a>
        </div>
        <div className="preview__actions" id='js-preview_actions'>
            <div className="preview__action--buy">
            <a className="header-buy-now e-btn--3d -color-primary" href="https://themeforest.net/checkout/from_item/55111370?license=regular&amp;support=bundle_6month">Buy now</a>            </div>
        </div>
    </div>
    )
}