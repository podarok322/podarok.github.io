import React, { useState } from 'react';
import './Slider.css'; // Импортируйте стили

const images = [
    { id: 1, src: '/images/1.jpg', alt: 'Image 1', p: 'adefwr' },
    { id: 2, src: '/images/2.jpg', alt: 'Image 2', p: 'qwe' },
    { id: 3, src: '/images/3.jpg', alt: 'Image 3', p: '123' },
];

const ImageGallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className="gallery">
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openModal(index)}
                        className="gallery-image"
                    />
                ))}
            </div>

            {modalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <button className="prev" onClick={prevSlide}>❮</button>
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="modal-content" />
                    <p>{images[currentIndex].p}</p>
                    <button className="next" onClick={nextSlide}>❯</button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;