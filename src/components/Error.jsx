import styled from "@emotion/styled"

const Text = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
`

const Error = ({ children }) => {
  return (
    <Text>
      {children}
    </Text>
  )
}

export default Error