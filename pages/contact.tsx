import React from 'react'
import { Paper, Title, Text, TypographyStylesProvider, Stack } from '@mantine/core';
function contact() {
    return (
        <>
            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Contact</Title>

                    <Text>
                        A beautiful, responsive, statically-generated, react application written with modern Javascript.
                    </Text>
                </Paper>


                <Paper shadow="xs" p="lg">
                    <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: '<p> Contact Me.</p>' }} />
                    </TypographyStylesProvider>

                </Paper>
            </Stack>
        </>
    )
}

export default contact