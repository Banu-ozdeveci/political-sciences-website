import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Annonces</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/duyuru1.jpg'
              text="Mme Catherine Colonna, ministre française de l'Europe et des Affaires étrangères a rendu visite à notre université"
              label='Actuel'
              path='/education'
            />
            <CardItem
              src='images/duyuru2.jpeg'
              text="Finale Nationale MT180 Turquie a été organisée à l'Université Galatasaray"
              label='Actuel'
              path='/education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src='images/duyuru3.jpg'
              text="Premier Prix Dans Le Concours D'ecriture"
              label='Événement'
              path='/education'
            />
            <CardItem
            src='images/duyuru4.jpg'
              text='Forum de Carrières Francophones'
              label='Nouvelle'
              path='/education'
            />
            <CardItem
            src='images/duyuru6.jpg'
              text="Résultats de l'évaluation des demandes d’admission des étudiants étrangers  pour l'année académique 2023-2024"
              label='Événement'
              path='/education'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
