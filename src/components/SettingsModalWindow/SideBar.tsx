import React, {FC} from 'react'
import {Avatar, Box, Button, Stack, Text} from "@chakra-ui/react";
import {MdBuild} from "react-icons/all";
import {VscAccount} from "react-icons/vsc";

interface SideBarProps {
    avatar: string | '',
    name: string | null,
    username: string | null
}

const SideBar: FC<SideBarProps> = ({avatar, name, username}) => {

    return(
        <Box borderRight='1px' borderColor="gray.600">
            <Box borderBottom={'1px'} p={2} borderColor={"gray.600"}>
                <Button h={20} w={"full"} variant={'ghost'}>
                    <Box>
                        <Avatar size={"sm"}
                                src={avatar}/>
                        <Text fontWeight={"normal"} pt={2}>{name}</Text>
                    </Box>
                </Button>
            </Box>
            <Stack p={2}>
                <Button w={"full"} isActive fontSize={15} fontWeight={"normal"} as={'button'} justifyContent={"left"}
                        variant={'ghost'}
                        leftIcon={<MdBuild fontSize={18}/>}>General</Button>
                <Button w={"full"} fontSize={15} fontWeight={"normal"} as={'button'} justifyContent={"left"}
                        variant={'ghost'}
                        leftIcon={<VscAccount fontSize={18}/>}>Account</Button>
            </Stack>
            <Box borderTop={'1px'} p={2} borderColor={"gray.600"}>
                <Stack spacing={1}>
                    <Button w={"full"} size={'sm'} fontSize={15} fontWeight={"normal"} as={'button'} justifyContent={"left"}
                            variant={'ghost'} color={'gray.500'}
                    >
                        Support
                    </Button>
                    <Button w={"full"} fontSize={15} size={'sm'} fontWeight={"normal"} as={'button'} justifyContent={"left"}
                            variant={'ghost'} color={'gray.500'}
                    >
                        Sign out @{username}
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default SideBar;