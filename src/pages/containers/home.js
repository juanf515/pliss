import React, {Component} from 'react';
import HomeLayout from '../componentes/homelayout';
import Categories from '../../categories/components/categories';
import Related from '../componentes/related';
import ModalContainer from '../../widgets/containers/modal';

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories}/>
                <ModalContainer>
                    <h1>esto es un portal</h1>
                </ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home;
