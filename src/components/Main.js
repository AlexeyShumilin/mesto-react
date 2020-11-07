import React from 'react';

const Main = () => {
    return (


        <main>
            <div className="profile page__profile">
                <div className="profile__avatar avatar">
                </div>
                <div className="user-info">
                    <div className="user-info__data">
                        <div className="user-info__name-data">
                            <h1 className="user-info__name">Жак-Ив Кусто</h1>
                            <button className=" button user-info__edit-button" type="button"/>
                        </div>
                        <p className="user-info__about">Исследователь океана</p>
                    </div>
                    <button className="button user-info__add-button" type="button"/>
                </div>
            </div>
            <section className="elements">
            </section>
        </main>
    )
}


export default Main;