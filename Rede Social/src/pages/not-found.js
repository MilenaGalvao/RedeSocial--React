import React from 'react';
import Layout from '../components/shared/Layouts';
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
    return (
        <Layout title="⛔ 404">
            <p className='h5'>Desculpe, essa página não está disponível</p>
            <p>O link que você tentou acessar está quebrado ou foi removido{" "}
                <Link to="/">retorne para o Senacgram</Link>
            </p>
        </Layout>);
}