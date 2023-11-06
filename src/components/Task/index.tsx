import { TaskCheckBox, TaskContainer, TaskDeleteButton, TaskText } from './styles'

export interface TaskProps {
	checked?: boolean;
	text: string;
	id: string;
	onCheck?: (id: string) => void;
	onDelete?: (id: string) => void;
}

export const Task = ({
	checked = false,
	text,
	id,
	onCheck = () => { },
	onDelete = () => { }
}: TaskProps) => {
	return <>
		<TaskContainer checked={checked} id={id}>
			<TaskCheckBox checked={checked} onClick={() => onCheck(id)} />
			<TaskText checked={checked}>{text}</TaskText>
			<TaskDeleteButton onClick={() => onDelete(id)} />
		</TaskContainer>
	</>
}