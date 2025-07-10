import React, { useEffect } from 'react'
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const { instance } = useMsal();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated(); // ✅ Agora está definido


    const handleMicrosoftLogin = async () => {
        try {
        await instance.loginPopup(); // ou loginRedirect()
        } catch (err) {
        console.error("Erro ao logar com Microsoft:", err);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
        navigate('/login');
        }
    }, [isAuthenticated, navigate]);

  return (
    <section className="container vh-100">
      <div className="row vh-100 justify-content-center align-items-center g-5">
        
        <div className="col-12 col-md-6 text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Exemplo de ilustração"
          />
        </div>

        <div className="col-12 col-md-8 col-lg-5">
          <h1>Seven Pounds Asset Management – Intranet</h1>
          <div className="p-5 border rounded shadow-sm bg-white">
            <h4 className="mb-4 text-center">Login</h4>
            <form>
                
              {/* Botão de login com Microsoft */}
              <button
                type="button"
                className="btn btn-outline-primary btn-lg w-100 mb-3"
                onClick={handleMicrosoftLogin}
              >
                Entrar com Microsoft
              </button>

            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
