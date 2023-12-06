# YouTube Clone

# DEBOUNCING

- key = i
- render the component
- useEffect()
- start timer => make api call after 200ms
 
- key = ip
- destroy the component and call the useEffect return method
- re-render the component
- useEffect()
- start timer => make api call after 200ms 

- setTimeout(200) - clears when new key stroke and new timer is setup
