import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    const Bookshelf = () => {
    // 书籍数据
    const [books, setBooks] = useState([
        { title: "Book Title A", author: "Author A", lastReviewed: "24/11/2023, 10:00 PM", rating: 4, reviews: 120 },
        { title: "Book Title B", author: "Author B", lastReviewed: "24/11/2023, 9:00 PM", rating: 5, reviews: 200 },
        { title: "Book Title C", author: "Author C", lastReviewed: "23/11/2023, 8:00 PM", rating: 3, reviews: 80 },
        { title: "Book Title D", author: "Author D", lastReviewed: "22/11/2023, 7:00 PM", rating: 2, reviews: 50 },
    ]);

    // 状态来管理排序方式和下拉菜单的显示
    const [sortType, setSortType] = useState('rating'); // 默认排序方式
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 控制下拉菜单显示

    // 切换下拉菜单的显示状态
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // 处理排序逻辑
    const handleSort = (type) => {
        setSortType(type);
        setIsDropdownOpen(false); // 选择排序后关闭下拉菜单

        const sortedBooks = [...books].sort((a, b) => {
        if (type === 'rating') {
            return b.rating - a.rating; // 按打星分数降序排列
        } else {
            return b.reviews - a.reviews; // 按评论数量降序排列
        }
        });

        setBooks(sortedBooks);
    };

    return (
        <div className="bg-[#f4e8e4] min-h-screen p-6">
        {/* Breadcrumb 导航 */}
        <div className="mb-6 text-lg">
            <Link to="/" className="text-blue-600 cursor-pointer hover:underline">
            Home
            </Link>
            <span> &gt; </span>
            <span className="text-blue-600 cursor-pointer">Bookshelf</span>
        </div>

        {/* 书籍分类展示 */}
        <div className="grid grid-cols-4 gap-6">
            {["Reviewed by You", "Currently Reading", "Read by Me", "Want to Read"].map((category, index) => (
            <div key={index} className="bg-[#d7bcb0] p-4 rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4 relative">
                <h2 className="text-2xl font-bold">{category}</h2>
                <button onClick={toggleDropdown} className="text-xl cursor-pointer">
                    ⇅
                </button>

                {/* 下拉菜单 */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-8 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                        <li
                        onClick={() => handleSort('rating')}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                        Sort by Rating (High to Low)
                        </li>
                        <li
                        onClick={() => handleSort('reviews')}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                        Sort by Reviews (High to Low)
                        </li>
                    </ul>
                    </div>
                )}
                </div>
                <p className="mb-4 text-sm">Total Books: {books.length}</p>

                {/* 书籍卡片列表 */}
                <div className="space-y-4 mb-6">
                {books.map((book, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex mb-3">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div> {/* 书籍封面占位符 */}
                        <div className="flex-1">
                        <h3 className="font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-600">by {book.author}</p>
                        <p className="text-xs text-gray-500 mt-1">Last Reviewed On: {book.lastReviewed}</p>
                        <p className="text-xs text-gray-500 mt-1">Rating: {book.rating} ★ | Reviews: {book.reviews}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                        <button className="text-blue-600 text-xl">💬</button> {/* 评论图标 */}
                        <button className="text-blue-600 text-xl">📘</button> {/* 查看详情图标 */}
                        <button className="text-green-600 text-xl">✏️</button> {/* 编辑图标 */}
                        </div>
                        <button className="bg-[#6c403c] text-white py-1 px-3 rounded-md">Reading</button> {/* 状态按钮 */}
                    </div>
                    </div>
                ))}
                </div>

                {/* 添加书籍按钮 */}
                <div className="flex justify-center mb-4">
                <button className="text-3xl text-gray-600">+</button>
                </div>

                {/* 编辑评论按钮，仅在 "Reviewed by You" 分类中显示 */}
                {category === "Reviewed by You" && (
                <div className="flex justify-center">
                    <button className="bg-[#6c403c] text-white py-2 px-4 rounded-md">Edit Review</button>
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    );
    };

export default Bookshelf;
