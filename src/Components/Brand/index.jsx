import PropTypes from 'prop-types';
import './brand.css'
function BrandImages({ brandImage }) {
    return (
        <ul>
            {
                brandImage.map((image) => {
                    return (
                        <li className="brand-images" key={image}>
                            <a href="">
                                <img src={`/src/assets/img/brand0${image}.png`} alt={`brand-image_0${image}`} />
                            </a>
                            <img src="/src/assets/img/brand_star.svg" alt="brand_star" className="brand_star" />
                        </li>
                    )
                })
            }
        </ul>
    )
}

BrandImages.propTypes = {
    brandImage: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export const Brand = () => {
    const brandImage = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="brand-area">
            <div className="brand-content">
                <BrandImages brandImage={brandImage} />
                <BrandImages brandImage={brandImage} />
            </div>
        </div>
    )
}