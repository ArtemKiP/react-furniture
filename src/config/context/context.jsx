import {createContext, useEffect, useState} from "react";
import api from "../Api/api";
import {useNavigate} from "react-router-dom"

export const CustomContext = createContext();


const Context = (props) => {

    const [user, setUser] = useState({email: ''});
    const [hitSale, setHitSale] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        if (localStorage.getItem('favorites') !== null){
            setFavorites(JSON.parse(localStorage.getItem('favorites')))

        }
    }, []);
    const registerUser = (user) => {
        api.post('register', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user,
                point: 0,
                orders: [],
                carts: [],
                city: '',
                home: '',
                street: ''
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };
    const loginUser = (user) => {
        api.post('login', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };
    const logOutUser = () => {
        setUser({email: ''});
        localStorage.removeItem('user');
        navigate('/')
    };

    const getHitSale = () => {
        api('products?_sort=sale&_order=desc&_limit=12').json()
            .then((res) => setHitSale(res))
    };

    const favoritesHandler = (product) => {

        let findProduct = favorites.some(item => item.id === product.id);
        if (findProduct){
            setFavorites(prev => prev.filter(item => item.id !== product.id))
        }else {
            setFavorites(prev => [...prev, product])
        }

    };
    useEffect(() => {
        localStorage.setItem('favorites' , JSON.stringify(favorites))
    }, [favorites]);
    

    let value = {
        user, setUser, registerUser, loginUser, logOutUser, hitSale, getHitSale, favoritesHandler, favorites
    };

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
     </CustomContext.Provider>
};


export default Context