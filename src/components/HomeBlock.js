import React from 'react';
import { useNavigate } from 'react-router-dom';
import AreWe from '../assets/AreWe.png';
import GoodEnergy from '../assets/GoodEnergy.png';
import Hamilton from '../assets/Hamilton.png';
import HarryPotter from '../assets/HarryPotter.png';
import SayThank from '../assets/SayThank.png';
import TheRepublic from '../assets/TheRepublic.png';
import WhenBreath from '../assets/WhenBreath.png';
import myImage from '../assets/myImage.png';
import './HomeBlock.css';

function HomeBlock() {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: 'Educated: The international bestselling memoir',
      author: 'Tara Westover',
      views: '2M',
      reviews: 20,
      rating: 4.0,
      image: myImage,
      description: 'People only see me as different....',
    },
    {
      id: 2,
      title: 'The Republic',
      author: 'Plato',
      views: '1.5M',
      reviews: 15,
      rating: 4.2,
      image: TheRepublic,
      description: 'A philosophical dialogue exploring justice and politics...',
    },
    {
      id: 3,
      title: 'Good Energy',
      author: 'Casey Means MD',
      views: '3M',
      reviews: 30,
      rating: 4.8,
      image: GoodEnergy,
      description: 'Discover the surprising connection between metabolism and health...',
    },
    {
      id: 4,
      title: 'Harry Potter and the Cursed Child',
      author: 'J. K. Rowling',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: HarryPotter,
      description: 'A continuation of Harry Potter\'s story through his children...',
    },
    {
      id: 5,
      title: 'Hamilton: The Revolution',
      author: 'Lin-Manuel Miranda',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: Hamilton,
      description: 'The story behind the groundbreaking musical Hamilton...',
    },
    {
      id: 6,
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: WhenBreath,
      description: 'A memoir on the journey of life, death, and what makes life meaningful...',
    },
    {
      id: 7,
      title: 'Are We Smart Enough',
      author: 'Frans de Waal',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: AreWe,
      description: 'A scientific exploration of animal intelligence and cognition...',
    },
    {
      id: 8,
      title: 'Say Thank You for Everything',
      author: 'Jim Edwards',
      views: '1M',
      reviews: 10,
      rating: 4.1,
      image: SayThank,
      description: 'Practical strategies for effective management...',
    },
  ];

  const handleReviewClick = (id) => {
    navigate(`/review/${id}`); // 修复 navigate 模板字符串问题
  };

  return (
    <div className="home-block">
      <h2>Most Liked Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-image">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <div className="book-stats">
                <span>👁 {book.views}</span>
                <span>💬 {book.reviews}</span>
                <span>⭐ {book.rating}</span>
              </div>
              <p className="book-description">{book.description}</p>
              <button
                className="add-review-btn"
                onClick={() => handleReviewClick(book.id)}
              >
                Add Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBlock;
