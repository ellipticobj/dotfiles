# docs (not well made pluh!)

## basic implementation
import the module 
```python
import randomorg
```

initialize the generator 
```python
randomgen = Generator(apikey = "API_KEY_HERE")
```

generate a number

```python
randomgen.randint()
```


## randint

randint generates a random integer  

### arguments

**min**
minimum number that can be generated (inclusive)  

**max**
maximum number that can be generated (inclusive)  

**numofints**
number of integers that are generated.  
default value is 1

**allowdupricates**
only applies when multiple numbers are generated  
when set to true, the numbers that are generated can contain duplicate numbers
default value is true
