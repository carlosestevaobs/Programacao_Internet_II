import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";


const TextareaContainer = styled.div`
  margin: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #00420c;
`;

const TextareaField = styled.textarea`
  background-color: #eeeff1;
  box-shadow: 2px 2px 10px rgba(0, 66, 12, 0.4);
  border: none;
  width: 300px;
  height: 100px;
  padding: 12px;
  color: #00420c;
  margin-bottom: 10px;
  border-radius: 10px;
`;

interface TextareaProps {
  label: string;
  placeholder: string;
  obrigatorio?: boolean;
  value: string;
  name: string;
  onChange: (evento: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({
  label,
  placeholder,
  obrigatorio = true,
  value,
  name,
  onChange,
}: TextareaProps) {
  const [valorCampoTexto, setValorCampoTexto] = useState(value);

  const atualizarLabel = (evento: KeyboardEvent<HTMLTextAreaElement>) => {
    const valor = evento.currentTarget.value;
    if (valor.length <= 500) {
      setValorCampoTexto(valor);
    }
  };

    return (
      <TextareaContainer>
        <Label>{label}</Label>
        <TextareaField
          required={obrigatorio}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          maxLength={500}
          onKeyUp={atualizarLabel}
        />
        <p>No máximo 500 caracteres. </p>
        <h3>{valorCampoTexto.length} caracteres</h3>
      </TextareaContainer>
    );
  };
  
  export default Textarea;
  