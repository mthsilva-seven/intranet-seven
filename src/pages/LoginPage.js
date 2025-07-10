import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_BASE_URL;


  const cards = [
    {
      title: 'Cadastro Setores',
      description: 'Visualize e edite os setores das empresas da carteira.',
      link: `${baseURL}:3000`
    },
    {
      title: 'Atas',
      description: 'Visualize as atas de reuniões.',
      link: `${baseURL}:3000/atascomite`
    },
    {
      title: 'Power BI Seven',
      description: 'Acesse os dashboards da gestora.',
      link: `${baseURL}/Reports/browse`
    }
  ];

  return (
    <div className="container py-5">
        <h2 className="text-center mb-5">Links da Seven</h2>
        <div className="row justify-content-center">
            {cards.map((card, index) => (
            <div
                key={index}
                className="col-md-4"
                onClick={() => window.location.href = card.link}
                style={{ cursor: 'pointer' }}
            >
                <div
                className="card shadow-sm mb-4 border-0 text-white text-center"
                style={{
                    background: 'linear-gradient(135deg, #4da3ff 0%, #1f77d0 100%)'
                }}
                >
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
</div>

  );
}
