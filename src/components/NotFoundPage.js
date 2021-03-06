import { Link } from 'react-router-dom';
//Estilos
import '../styles/layout/notFoundPage.scss';
//Imágenes
import portal from '../images/rick-and-morty-portal.png';
const NotFoundPage = () => {
  return (
    <div className='page'>
      <Link to='/' className='link'>
        <img
          src={portal}
          alt='Portal de vuelta a inicio'
          className='portal-img2'
          title='Volver a incio'
        />
      </Link>
      <p className='no-page--par2'>
        Wubba Lubba Dub Dub!! <br /> Vuelve por el portal
      </p>
    </div>
  );
};

export default NotFoundPage;
