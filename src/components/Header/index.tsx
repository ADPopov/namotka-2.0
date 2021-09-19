import React, {FC} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Spacer,
    useDisclosure
} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../assets/ColorModeSwitcher";
import {BsPlusCircle, CgFeed, VscAccount} from "react-icons/all";
import {SettingsIcon} from "@chakra-ui/icons";
import {useAction} from "../../hooks/useAction";
import { SettingsModal } from '../SettingsModalWindow';

const LoginBar: FC = () => {
    return (
        <>
            {/*<Button colorScheme="teal" fontSize={14} variant="outline" mr="4">*/}
            {/*    Log In*/}
            {/*</Button>*/}
            {/*<Button colorScheme="orange" fontSize={14} mr="4">*/}
            {/*    Sign Up*/}
            {/*</Button>*/}
        </>
    )
}

const Header: FC = () => {
    const {isAuth} = useTypeSelector(state => state.auth);
    return (
        <Flex alignItems={'center'} pt={2} pr={5} pb={2} pl={5} minH={"70px"}>
            <Heading as={'a'} href={'/'} size={'md'} fontWeight="bold"> NAMOTKA </Heading>
            <Spacer/>
            {isAuth ?
                <NavigationBar/>
                :
                <LoginBar/>
            }
            <ColorModeSwitcher ml='2px'/>
        </Flex>
    );
};

const ProfileMenu: FC = () => {
    const {onOpen, onClose, isOpen} = useDisclosure();

    const {logout} = useAction();

    const logOut = async () => {
        logout();
    }

    return (
        <>
            <Menu placement={"bottom-end"}>
                <MenuButton p={0} m={0} ml={'2px'} as={Button} variant="ghost">
                    <Center>
                        <VscAccount size="20"/>
                    </Center>
                </MenuButton>
                <MenuList zIndex={9999}>
                    <MenuGroup>
                        <MenuItem onClick={onOpen} icon={<Center><SettingsIcon/></Center>}>Settings</MenuItem>
                        <MenuDivider/>
                        <MenuItem onClick={logOut}>Log Out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
            <SettingsModal onClose={onClose} isOpen={isOpen}/>
        </>
    )
}

const NavigationBar: FC = () => {
    const {onOpen} = useDisclosure();
    return (
        <Box>
            <Flex alignItems={'center'}>
                <Button as="a" variant="ghost" p={0} href="#" onClick={() => onOpen()}><BsPlusCircle size="20"/>
                </Button>
                <Center height="50px" w="5px" pl={2} pr={1}><Divider colorScheme={'yellow'} size={'xl'}
                                                                     orientation="vertical"/></Center>
                <Button as="a" variant="ghost" ml={'2px'} p={0} href="#"><CgFeed size="20"/></Button>
                <ProfileMenu/>
            </Flex>
            {/*<PostWindow isOpen={isOpen} onClose={onClose} type={'create'}/>*/}
        </Box>
    );
}


export default Header;