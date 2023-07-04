import FilledElement from '../FilledElement'
import TransparentButton from '../TransparentButton'


const FilledButton = ({text}: {text: string}) => (
    <TransparentButton>
        <FilledElement
            style={{ cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {text}
        </FilledElement>
    </TransparentButton>
)

export default FilledButton