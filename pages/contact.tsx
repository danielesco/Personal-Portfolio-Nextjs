import React from 'react'
import {
    Paper, Title, Text, TypographyStylesProvider, Stack,
    Space,
} from '@mantine/core';
function contact() {
    return (
        <>
            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Contact</Title>

                </Paper>


                <Paper shadow="xs" p="lg">
                    <Space h="sm"></Space>
                    <Text>Feel free to get in touch. You can email me at:</Text>
                    <Text underline component='a' href='mailto:danjay.escobar@gmail.com'>danjay.escobar@gmail.com</Text>

                </Paper>
            </Stack>
        </>
    )
}

export default contact