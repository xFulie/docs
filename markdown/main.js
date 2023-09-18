// -------------------------------------------
// PARSER
// -------------------------------------------
// https://codepen.io/gilsjhonny/pen/mmXRLq

function parse( content ) {
	// Regular Expressions
	const h1 = /^#{1}[^#].*$/gm;
	const h2 = /^#{2}[^#].*$/gm;
	const h3 = /^#{3}[^#].*$/gm;
	const bold = /__[^\*\n]+__/gm;
	const italics = /[^_]_[^_\n]+_/gm;
	const link = /\[([\w\s\d\-_.@]+)\]\(((tel:[0-9]+)|(mailto:[a-zA-Z0-9_.+-@]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)|(((?:https?)|(?:ftp)):\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}))\)/gm;
	const lists = /^((\s*((\*|\-)|\d(\.|\))) [^\n]+))+$/gm;
	const unorderedList = /^[\*|\+|\-]\s.*$/;
	const unorderedSubList = /^\s\s\s*[\*|\+|\-]\s.*$/;
	const orderedList = /^\d\.\s.*$/;
	const orderedSubList = /^\s\s+\d\.\s.*$/;
	const strong = /^> (.*$)/gm;

	// Example: # Heading 1
	if( h1.test( content ) ) {
		const matches = content.match( h1 );

		matches.forEach( element => {
			const extractedText = element.slice( 1 );
			content = content.replace( element, '<h1>' + extractedText + '</h1>' );
		} );
	}

	// Example: # Heading 2
	if( h2.test( content ) ) {
		const matches = content.match( h2 );

		matches.forEach( element => {
			const extractedText = element.slice( 2 );
			content = content.replace( element, '<h2>' + extractedText + '</h2>' );
		} );
	}

	// Example: # Heading 3
	if( h3.test( content ) ) {
		const matches = content.match( h3 );

		matches.forEach( element => {
			const extractedText = element.slice( 3 );
			content = content.replace( element, '<h3>' + extractedText + '</h3>' );
		} );
	}

	// Example: > Strong
	if( strong.test( content ) ) {
		const matches = content.match( strong );

		matches.forEach( element => {
			const extractedText = element.slice( 2, -2 );
			content = content.replace( element, '<strong>' + extractedText + '</strong>' );
		} );
	}

	// Example: **Bold**
	if( bold.test( content ) ) {
		const matches = content.match( bold );

		matches.forEach( element => {
			const extractedText = element.slice( 2, -2 );
			content = content.replace( element, '<b>' + extractedText + '</b>' );
		} );
	}

	// Example: *Italic*
	if( italics.test( content ) ) {
		const matches = content.match( italics );

		matches.forEach( element => {
			const extractedText = element.slice( 2, -1 );
			content = content.replace( element, ' <i>' + extractedText + '</i>' );
		} );
	}

	// Example: [I'm an inline-style link](https://www.google.com)
	if( link.test( content ) ) {
		const links = content.match( link );

		links.forEach( element => {
			const text = element.match( /^\[.*\]/ )[ 0 ].slice( 1, -1 );
			const url = element.match( /\]\(.*\)/ )[ 0 ].slice( 2, -1 );

			content = content.replace( element, '<a href="' + url + '">' + text + '</a>' );
		} );
	}

	if( lists.test( content ) ) {
		const matches = content.match( lists );

		matches.forEach( list => {
			const listArray = list.split( '\n' );

			const formattedList = listArray.map( ( currentValue, index, array ) => {
				if( unorderedList.test( currentValue ) ) {
					currentValue = '<li>' + currentValue.slice( 2 ) + '</li>';

					if( !  unorderedList.test( array[ index - 1 ] ) && ! unorderedSubList.test( array[ index - 1 ] ) ) {
						currentValue = '<ul>' + currentValue;
					}

					if( !  unorderedList.test( array[ index + 1 ] )  &&  ! unorderedSubList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ul>';
					}

					if( unorderedSubList.test( array[ index + 1 ] ) || orderedSubList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue.replace( '</li>', '' );
					}
				}

				if( unorderedSubList.test( currentValue ) ) {
					currentValue = currentValue.trim();
					currentValue = '<li>' + currentValue.slice( 2 ) + '</li>';

					if( ! unorderedSubList.test( array[ index - 1 ] ) ) {
						currentValue = '<ul>' + currentValue;
					}

					if( ! unorderedSubList.test( array[ index + 1 ] ) && unorderedList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ul></li>';
					}

					if( ! unorderedSubList.test( array[ index + 1 ] ) && ! unorderedList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ul></li></ul>';
					}
				}

				if( orderedList.test( currentValue ) ) {
					currentValue = '<li>' + currentValue.slice( 2 ) + '</li>';

					if( ! orderedList.test( array[ index - 1 ] ) && ! orderedSubList.test( array[ index - 1 ] ) ) {
						currentValue = '<ol>' + currentValue;
					}

					if( ! orderedList.test( array[ index + 1 ] ) && ! orderedSubList.test( array[ index + 1 ] ) && ! orderedList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ol>';
					}

					if( unorderedSubList.test( array[ index + 1 ] ) || orderedSubList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue.replace( '</li>', '' );
					}
				}

				if( orderedSubList.test( currentValue ) ) {
					currentValue = currentValue.trim();
					currentValue = '<li>' + currentValue.slice( 2 ) + '</li>';

					if( ! orderedSubList.test( array[ index - 1 ] ) ) {
						currentValue = '<ol>' + currentValue;
					}

					if( orderedList.test( array[ index + 1 ] ) && ! orderedSubList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ol>';
					}

					if( ! orderedList.test( array[ index + 1 ] ) && ! orderedSubList.test( array[ index + 1 ] ) ) {
						currentValue = currentValue + '</ol></li></ol>';
					}
				}

				return currentValue;
			} ).join( '' );

			console.log( formattedList );
			content = content.replace( list, formattedList );
		} );
	}

	return content.split( '\n' ).map( line => {
		if( ! h1.test( line ) && ! h2.test( line ) && ! h3.test( line ) && ! unorderedList.test( line ) && ! unorderedSubList.test( line ) && ! orderedList.test( line ) && ! orderedSubList.test( line ) ) {
			return line.replace( line, '<p>' + line + '</p>' );
		}
	} ).join( '' );
}