import { EmptyTasksContainer } from './styles'

import clipboard from '../../assets/clipboard.svg'

export const EmptyTasks = () => {
	return (
		<EmptyTasksContainer>
			<img width={56} height={56} src={clipboard} alt="clipboard" />
			<strong>Você ainda não tem tarefas cadastradas</strong>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</EmptyTasksContainer>
	)
}