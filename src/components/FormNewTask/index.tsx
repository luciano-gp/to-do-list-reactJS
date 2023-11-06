import { ChangeEvent, FormEvent, useState } from 'react'
import { FormButton, FormContainer, FormInput } from './styles'

import plus from '../../assets/plus.svg'
import { TaskProps } from '../Task'

interface FormNewTaskProps {
	newTaskFunction: (task: TaskProps) => void;
}

export const FormNewTask = ({ newTaskFunction }: FormNewTaskProps) => {
	const [active, setActive] = useState(false)

	const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const newTaskInput = (event.target as HTMLFormElement).elements.namedItem('newTask') as HTMLInputElement | null

		if (newTaskInput) {
			newTaskFunction({
				text: newTaskInput.value,
				checked: false,
				id: new Date().getTime().toString()
			})

			newTaskInput.value = ''
			setActive(false)
		}
	}

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value) {
			setActive(true)
		} else {
			setActive(false)
		}
	}

	return (
		<FormContainer onSubmit={handleNewTask}>
			<FormInput 
				id='newTask'
				name='newTask'
				placeholder='Adicione uma nova tarefa'
				onChange={handleChangeInput}
				required
			/>
			<FormButton type='submit' $active={active}>
				Criar <img src={plus}/>
			</FormButton>
		</FormContainer>
	)
}