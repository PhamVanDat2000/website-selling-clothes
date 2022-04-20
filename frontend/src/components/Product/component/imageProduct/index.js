import React, { useState } from 'react'
import { SideBySideMagnifier } from "react-image-magnifiers";
import ContentLoader from "react-content-loader";
import './styles.scss'
import { PATH_IMG } from './../../../../env';
export default function ImageProduct(props) {
    const contentLoader = () => (
        <ContentLoader viewBox="0 0 100 100">
            <rect x="0" y="0" width="100%" height="100%" />
        </ContentLoader>
    );

    const { productItem } = props;
    const { images_url } = productItem
    const [isAtDesktop, setIsAtDesktop] = useState(true);
    const [isLast, setIsLast] = useState(false);

    return (
        <div className="detail-img">
            {images_url ? (
                <SideBySideMagnifier
                    className={isLast ? "detail-img__main last" : "detail-img__main"}
                    imageSrc={`${PATH_IMG}/${images_url[0]}`}
                    imageAlt="Product"
                    alwaysInPlace={true}
                    transitionSpeedInPlace={0.3}
                />
            ) : (
                contentLoader()
            )
            }


            <div className="detail-img__slides">
                {images_url ? (
                    <>
                        <div
                            onClick={() => setIsLast(false)}
                            className={
                                isLast ? "detail-img__slide last" : "detail-img__slide"
                            }
                        >
                            <img src={`${PATH_IMG}/${images_url[0]}`} alt="Slide" />
                        </div>
                    </>
                ) : (
                    <>
                        {contentLoader()}
                        {contentLoader()}
                    </>
                )}
            </div>
        </div>
    );
}
