import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import useWindowSize from '../hooks/useWindowSize';

const ContactForm = () => {
  const { width } = useWindowSize();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className={`grid mt-2 pl-3`}>
      <form action="" method="post" className={`bg-white shadow-1 border-round-xl p-3 ' ${width < 769 ? 'col-12' : 'col-6'}`}>
        <div>
          <FloatLabel className='field '>
            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border-round-md' />
            <label htmlFor="email">E-mail</label>
          </FloatLabel>
          <FloatLabel className='field mt-5'>
            <InputText id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className='w-full border-round-md' />
            <label htmlFor="subject">Assunto</label>
          </FloatLabel>
          <FloatLabel className='field mt-5'>
            <InputTextarea rows={5} id="content" value={content} onChange={(e) => setContent(e.target.value)} className='w-full border-round-md' />
            <label htmlFor="content">Conteúdo</label>
          </FloatLabel>
          <Button label="Enviar" className='w-full border-round-md' style={{ backgroundColor: 'var(--primary-color)' }} />
        </div>
      </form>
      <div className={`${width < 769 ? 'col-12' : 'col-6 pl-5'}`}>
        <h2 style={{ color: 'var(--primary-color)' }}>Informações Extras de Contato:</h2>

        <h3 className='mt-3' style={{ color: 'var(--primary-color)' }}>Telefone:</h3>
        <p>WhatsApp: +55 (21)96865-5554</p>

        <h3 className='mt-3' style={{ color: 'var(--primary-color)' }}>Endereço:</h3>
        <p>Praça General Tibúrcio, s/nº, Praia Vermelha – Urca / Rio de Janeiro – RJ</p>
        <p>CEP: 22290-270</p>

        <h3 className='mt-5' style={{ color: 'var(--primary-color)' }}>Atendimento na Secretaria:</h3>
        <p>Segunda à Sexta: 8h às 18h</p>
        <p>Sábado: 9h às 13h</p>
        <p>Fechado aos Domingos e Feriados</p>
      </div>
    </div>
  )
}

export default ContactForm