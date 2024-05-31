// src/UserForm.js
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';

const UserForm = ({ user }) => {
    const { addUser, updateUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                username: user.username || '',
                phone: user.phone || '',
                website: user.website || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            updateUser(user.id, formData);
        } else {
            addUser(formData);
        }
        setFormData({
            name: '',
            email: '',
            username: '',
            phone: '',
            website: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
            />
            <button type="submit">{user ? 'Update' : 'Add'} User</button>
        </form>
    );
};

export default UserForm;
