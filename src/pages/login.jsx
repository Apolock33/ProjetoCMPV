import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { FloatLabel } from 'primereact/floatlabel'
import Logo from '../assets/imgs/logos/newLogoDark.svg'
import useWindowSize from '../hooks/useWindowSize'
import { Button } from 'primereact/button'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className='flex flex-column justify-content-center align-items-center w-full h-screen'>
      <div className='bg-white m-2 p-3 shadow-3 border-round-xl'>
        <div className='flex flex-column justify-content-center align-items-center'>
          <img src={Logo} alt="logo" width={width < 768 ? 200 : width < 1024 ? 300 : 450} />
        </div>
        <form action="" method="post" >
          <div className='grid formgrid '>
            <div className='col'>
              <FloatLabel className='field mt-4'>
                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border-round-md' />
                <label htmlFor="email">E-mail</label>
              </FloatLabel>
              <FloatLabel className='field mt-5'>
                <InputText id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full border-round-md' />
                <label htmlFor="password">Senha</label>
              </FloatLabel>
              <Button label="Entrar" className='w-full mt-3 border-round-md' style={{ backgroundColor: 'var(--primary-color)' }} />
            </div>
          </div>
        </form>
        <hr className='my-3' />
        <div className='grid'>
          <div className='flex flex-column align-items-center w-full'>
            <span className='text-sm'>Ainda não faz parte do nosso Círculo?</span>
            <Button label="Seja CMPV" className='w-full mt-3 border-round-md' style={{ backgroundColor: 'var(--primary-color)' }} />
          </div>
          <div className='flex flex-column align-items-center w-full mt-3'>
            <Button
              rounded
              outlined
              icon={<FaArrowLeft />}
              label="Voltar a Home"
              className='w-full mt-3 border-round-md mb-2'
              style={{ color: 'var(--primary-color)' }} 
              onClick={() => navigate('/')}
              />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login