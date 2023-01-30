import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <div className="photo" />
            <div className="info">
                <p>Привет! Меня зовут Антон!</p>
                <p>Занимаюсь разработкой приложений на JavaSсript.</p>
                <div className="contacts">
                    <p>Контакты:</p>
                    <p>
                        <b>моб. телефон: </b> +7 964 218 92 77
                    </p>
                    <p>
                        <b>e-mail:</b> aslebedevdev@gmail.com
                    </p>
                    <p>
                        <b>GitHub:</b> <a href="https://github.com/sorrint/">https://github.com/Sorrint</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
