run: *.js
	php -S 0.0.0.0:8000

%.js : %.kt
	kotlinc-js $< -output $@

