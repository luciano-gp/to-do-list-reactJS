import { TaskProps } from '../Task'
import { ContainerSummary, SummaryCount, SummaryText } from './styles'

interface SummaryTaskProps {
    tasks: TaskProps[];
}

export const SummaryTask = ({ tasks }: SummaryTaskProps) => {
	const tasksTotal = tasks.length
	const tasksCompleted = tasks.reduce((total, task) => total + (task.checked ? 1 : 0), 0)

	return (
		<ContainerSummary $variant='outer'>
			<ContainerSummary>
				<SummaryText $variant='green'>Tarefas criadas</SummaryText>
				<SummaryCount>{tasksTotal}</SummaryCount>
			</ContainerSummary>

			<ContainerSummary>
				<SummaryText $variant='brown'>Concluídas</SummaryText>
				<SummaryCount>{`${tasksCompleted}${tasksCompleted ? ' de ' + tasksTotal : ''}`}</SummaryCount>
			</ContainerSummary>
		</ContainerSummary>
	)
}