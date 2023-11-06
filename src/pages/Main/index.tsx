import { useState } from 'react'
import { FormNewTask } from '../../components/FormNewTask'
import { Header } from '../../components/Header'
import { Task, TaskProps } from '../../components/Task'
import { ContainerMain } from './styles'
import { SummaryTask } from '../../components/SummaryTask'
import { EmptyTasks } from '../../components/EmptyTasks'

export const Main = () => {
	const [tasks, setTasks] = useState<TaskProps[]>([])

	const handleNewTask = (task: TaskProps) => {
		setTasks([task, ...tasks])
	}

	const handleCheckTask = (id: string) => {
		const newTasks = tasks.map(task => {
			if (task.id === id) {
				task.checked = !task.checked
			}
			
			return task
		})

		const orderedTasks = [...newTasks].sort((a, b) => (a.checked === b.checked) ? 0 : a.checked ? 1 : -1)

		setTasks(orderedTasks)
	}

	const handleDeleteTask = (id: string) => {
		const newTasks = tasks.filter(task => task.id!== id)

		setTasks(newTasks)
	}

	return (
		<>
			<Header />
			<ContainerMain>
				<FormNewTask newTaskFunction={handleNewTask}/>
				<SummaryTask tasks={tasks}/>
				{tasks?.length > 0 ? tasks.map(task => 
					<Task
						onCheck={handleCheckTask}
						onDelete={handleDeleteTask}
						checked={task?.checked}
						text={task.text}
						id={task.id}
						key={task.id}
					/>
				) : 
					<EmptyTasks/>
				}
			</ContainerMain>
		</>
	)
}