import React from 'react'
import { Container, Form } from "react-bootstrap";
import '../header/style.scss'
import { useTheme } from '../../context/ThemeContext';



const Header: React.FC = () => {
    const { darkMode, toggleTheme } = useTheme(); // Use useTheme hook to access theme state and toggle function
    console.log(darkMode)
    const titleStyle = darkMode ? 'lights' : 'blacks';

    return (
        <Container fluid="lg">
            <header className="mb-4">
                <div className="d-flex justify-content-between">
                    <div>
                        <h1 className={`header-title ${titleStyle}`}>Social Media Dashboard</h1>
                        <small>Total Followers: 23,004</small>
                    </div>
                    <div>
                        <Form>
                            <Form.Check
                                className="custom-switch-label-left"
                                label="Dark Mode"
                                type="switch"
                                id="custom-switch"
                                checked={darkMode} // Set checked attribute based on darkMode state
                                onChange={toggleTheme}
                            />
                        </Form>

                    </div>
                </div>
            </header>
        </Container>
    )
}
export default Header
