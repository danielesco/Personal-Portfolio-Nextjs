import React from 'react'
import { Paper, Title, Text, TypographyStylesProvider, Stack } from '@mantine/core';

function resume() {
    return (
        <>

            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Resume</Title>

                    <Text>
                        Here's my resume!
                    </Text>
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