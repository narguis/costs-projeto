import {useEffect, useState} from 'react'

import styles from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, projectData, btnText}) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  async function handleChange(e){
    let teste = await setProject({...project, [e.target.name]: e.target.value})
    console.log(project)
  }





  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        placeholder="Insira o nome do projeto"
        name="name"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        placeholder="Insira o orçamento total"
        name="budget"
        handleOnChange={handleChange}
      />
      <Select name="category_id" text="Selecione a categoria" options={categories}/>
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
