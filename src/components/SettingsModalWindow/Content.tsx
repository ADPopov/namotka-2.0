import React, {FC, useState} from 'react';
import {Box, Button, Flex, FormControl, FormLabel, Grid, Input, ModalBody, ModalContent, Stack} from "@chakra-ui/react";
import {FieldErrors, SubmitHandler, useForm} from "react-hook-form";
import SideBar from "./SideBar";
import {IProfile} from "../../models/User";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useAction} from "../../hooks/useAction";
interface iContentProps {
    profile: IProfile,
    onClose: () => void,
}

export interface IGeneralSettingsFormInput {
    username: string,
    displayName: string,
    about: string,
    website: string,
}

const Content: FC<iContentProps> = ({profile, onClose}) => {
    const schema = yup.object().shape({});
    const {updateProfile} = useAction();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<IGeneralSettingsFormInput> = async data => {
        setIsLoading(true);
        await updateProfile({
            username: data.username,
            website: data.website,
            display_name: data.displayName,
            about: data.about
        });
        setIsLoading(false);
    };


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IGeneralSettingsFormInput>({resolver: yupResolver(schema)});

    return (
        <ModalContent pt={0}>
            <ModalBody p={0}>
                <Grid templateColumns={'1fr 2fr'}>
                    <SideBar avatar={profile.avatarURL!} name={profile.display_name!} username={profile.username!}/>
                    <Box p={3}>
                        <GeneralSettingsForm register={register} errors={errors} profile={profile}/>
                        <Flex mt={5} justifyContent={"right"}>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button colorScheme={'teal'}
                                    type={'button'}
                                    isLoading={isLoading}
                                    onClick={handleSubmit(onSubmit)}
                                    variant={'outline'} ml={3}>Save</Button>
                        </Flex>
                    </Box>
                </Grid>
            </ModalBody>
        </ModalContent>
    )
}

interface IGeneralSettingsFormProps {
    register: any,
    errors: FieldErrors<IGeneralSettingsFormInput>,
    profile: IProfile
}

const GeneralSettingsForm: FC<IGeneralSettingsFormProps> = ({register, errors, profile}) => {
    return (
        <form>
            <Stack spacing={6}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input defaultValue={profile.username} {...register("username",)} />
                    {<Box color={"red.500"} pt={1}>{errors.username?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>DisplayName</FormLabel>
                    <Input defaultValue={profile.display_name}  {...register("displayName",)} />
                    {<Box color={"red.500"} pt={1}>{errors.displayName?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>About</FormLabel>
                    <Input defaultValue={profile.about}  {...register("about",)} />
                    {<Box color={"red.500"} pt={1}>{errors.about?.message}</Box>}
                </FormControl>
                <FormControl>
                    <FormLabel>Website</FormLabel>
                    <Input defaultValue={profile.website} {...register("website",)} />
                    {<Box color={"red.500"} pt={1}>{errors.website?.message}</Box>}
                </FormControl>
            </Stack>
        </form>
    );
};

export default Content;