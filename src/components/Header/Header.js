import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-danger fw-bold" href="/logo">e-Commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-danger fw-bold " aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-danger fw-bold " href="/shop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-danger fw-bold " href="/order">Order</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-danger fw-bold " href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-danger fw-bold " href="/contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;