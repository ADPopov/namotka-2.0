import React, {FC} from 'react';
import {Modal, ModalOverlay,} from '@chakra-ui/react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import Content from './Content';

interface SettingsProps {
    onClose: () => void,
    isOpen: boolean
}

export const SettingsModal: FC<SettingsProps> = ({onClose, isOpen}) => {
    const {profile} = useTypeSelector(state => state.profile);
    return (
        <Modal onClose={onClose} size={'2xl'} isOpen={isOpen}>
            <ModalOverlay/>
            {profile != undefined ? <Content profile={profile} onClose={onClose}/> : null}
        </Modal>
    )
}

export default SettingsModal;
