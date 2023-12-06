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

# CACHE

- Time Complexity to search in an array = O(n)
- Time Complexity to search in an Object = O(1)

- [i, ip, iph, ipho, iphon, iphone]
- {
-     i:
-     ip:
-     iph:
-     ipho:
-     iphon:
-     iphone:
- }

- new Map() more optimised than Object