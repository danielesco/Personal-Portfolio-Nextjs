import React from 'react'
import { Paper, Title, Text, TypographyStylesProvider, Stack, Table } from '@mantine/core';
function stats() {
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
        </tr>
    ));
    return (
        <>

            <Stack>
                <Paper shadow="xs" p="md" withBorder>
                    <Title align='center'>Stats</Title>

                    <Text>
                        A beautiful, responsive, statically-generated, react application written with modern Javascript.
                    </Text>
                </Paper>


                <Paper shadow="xs" p="lg">
                    <Table striped highlightOnHover>
                        <thead>
                            <tr>
                                <th>Element position</th>
                                <th>Element name</th>
                                <th>Symbol</th>
                                <th>Atomic mass</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>

                </Paper>
            </Stack>

        </>
    )
}

export default stats