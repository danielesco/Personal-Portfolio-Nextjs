import React from 'react'
import {
    Paper, Title, Text, TypographyStylesProvider, Stack,
    Space
} from '@mantine/core';

function resume() {
    return (
        <>

            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Resume</Title>

                    <Space h="md"></Space>
                    <Title italic order={4}>Here's my resume!</Title>
                </Paper>


                <Paper shadow="xs" p="lg">
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: '<p> resume is here</p>' }} />
                    </TypographyStylesProvider>

                </Paper>
            </Stack>

        </>
    )
}

export default resume