window.addEventListener('load', (event) => {
    event.preventDefault();
    axios('http://localhost:3000/api/products/')
        .then(response => {
            const productos = response.data.map(producto => {
                return `<div class="col-12 col-sm-6 col-lg-4">
                        <section class="product-box">
                        <a href="/products/detail/${producto.id}">
                            <figure class="product-box_image">
                                <img src="/images/products/${producto.image}" alt="${producto.name}">
                            </figure>
                            <article class="product-box_data">
                                <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                <span>${producto.discount} % OFF</span>
                                <p>${producto.name}</p>
                                <i class="fas fa-truck"></i>
                            </article>
                        </a>
                        </section>
                    </div>`
            }).join('');
            let products_container = document.querySelector('#products-per-category');
            products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
            products_container.insertAdjacentHTML('afterbegin', productos);
        })
        .catch(err => {
            console.log(err.message);
        })

    let allProducts = document.getElementById('allProducts');
    allProducts.addEventListener('click', (e) => {
        window.location.reload();
    })

    let outdoors = document.getElementById('Outdoors');
    outdoors.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + outdoors.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = outdoors.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    let computers = document.getElementById('Computers');
    computers.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + computers.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = computers.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    let cameras = document.getElementById('Cameras');
    cameras.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + cameras.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = cameras.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    let home = document.getElementById('Home');
    home.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + home.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = home.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    let tools = document.getElementById('Tools');
    tools.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + tools.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = tools.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    let tv = document.getElementById('TV');
    tv.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + tv.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = tv.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    let phones = document.getElementById('Phones');
    phones.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + phones.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = phones.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    let toys = document.getElementById('Toys');
    toys.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + toys.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = toys.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    let music = document.getElementById('Music');
    music.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + music.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = music.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })

    let shoes = document.getElementById('Shoes');
    shoes.addEventListener('click', (e) => {
        e.preventDefault();
        axios('http://localhost:3000/api/products/' + shoes.innerText)
            .then(response => {
                const productos = response.data.map(producto => {
                    return `<div class="col-12 col-sm-6 col-lg-4">
                            <section class="product-box">
                            <a href="/products/detail/${producto.id}">
                                <figure class="product-box_image">
                                    <img src="/images/products/${producto.image}" alt="${producto.name}">
                                </figure>
                                <article class="product-box_data">
                                    <h2>$${Math.trunc(producto.price - producto.price * producto.discount / 100)}</h2>
                                    <span>${producto.discount} % OFF</span>
                                    <p>${producto.name}</p>
                                    <i class="fas fa-truck"></i>
                                </article>
                            </a>
                            </section>
                        </div>`
                }).join('');
                document.querySelector('.products-title').innerText = shoes.innerText;
                let products_container = document.querySelector('#products-per-category');
                products_container.innerHTML = ''; // Tengo que agregar esto para borrar todos los productos que existen previamente (O los que no son llamados por la API?)
                products_container.insertAdjacentHTML('afterbegin', productos);
            })
            .catch(err => {
                console.log(err.message);
            })
    })
});