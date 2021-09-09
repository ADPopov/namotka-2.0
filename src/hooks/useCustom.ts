import {useToast} from "@chakra-ui/react";

type Status = 'error' | 'success';

export const useCustomToast = () => {
    const toast = useToast()
    return (title: string, errorMessage: string, status: Status) => toast({
        title: title,
        description: errorMessage,
        status: status,
        duration: 3000,
        isClosable: true,
        position: "top"
    })
}